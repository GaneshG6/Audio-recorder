import React, { useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/dist/plugins/record.esm.js";
import { Button, Dropdown } from "../../../Component";
import { transformArray } from "../../../Utils";

const Recorder = () => {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [record, setRecord] = useState(null);
  const [progress, setProgress] = useState("00:00");
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const micRef = useRef();
  const recordingsRef = useRef();
  const [selectMic, setSelectMic] = useState([]);

  
  const createWaveSurfer = () => {
    if (wavesurfer) {
      wavesurfer.destroy();
    }

    const newWaveSurfer = WaveSurfer.create({
      container: micRef.current,
      waveColor: "rgb(200, 0, 200)",
      progressColor: "rgb(100, 0, 100)",
    });

    const newRecord = newWaveSurfer.registerPlugin(
      RecordPlugin.create({
        renderRecordedAudio: false,
        scrollingWaveform: true,
      })
    );

    newRecord.on("record-end", (blob) => {
      const container = recordingsRef.current;
      const recordedUrl = URL.createObjectURL(blob);
      const recordedWaveSurfer = WaveSurfer.create({
        container,
        waveColor: "rgb(200, 100, 0)",
        progressColor: "rgb(100, 50, 0)",
        url: recordedUrl,
      });

      const button = document.createElement("button");
      button.textContent = "Play";
      button.className = "btn btn-primary btn-lg mt-4";
      button.onclick = () => recordedWaveSurfer.playPause();
      recordedWaveSurfer.on("pause", () => (button.textContent = "Play"));
      recordedWaveSurfer.on("play", () => (button.textContent = "Pause"));
      container.appendChild(button);

      const link = document.createElement("a");
      Object.assign(link, {
        href: recordedUrl,
        download: `recording.${
          blob.type.split(";")[0].split("/")[1] || "webm"
        }`,
        textContent: "Download recording",
        className: "mt-4 ",
      });
      container.appendChild(link);
    });

    newRecord.on("record-progress", (time) => {
      const formattedTime = [
        Math.floor((time % 3600000) / 60000),
        Math.floor((time % 60000) / 1000),
      ]
        .map((v) => (v < 10 ? "0" + v : v))
        .join(":");
      setProgress(formattedTime);
    });

    // pauseButtonRef.current.style.display = "none";
    setWavesurfer(newWaveSurfer);
    setRecord(newRecord);
  };

  useEffect(() => {
    createWaveSurfer();

    RecordPlugin.getAvailableAudioDevices().then((devices) => {
      console.log(devices);

      setSelectMic(devices);
      //   const micSelect = micSelectRef.current;
      //   devices.forEach((device) => {
      //     const option = document.createElement("option");
      //     option.value = device.deviceId;
      //     option.text = device.label || device.deviceId;
      //     micSelect.appendChild(option);
      //   });
    });

    return () => {
      if (wavesurfer) wavesurfer.destroy();
    };
  }, []);

  const handleRecord = () => {
    if (isRecording || isPaused) {
      record.stopRecording();
      setIsRecording(false);
      setIsPaused(false);
      //   pauseButtonRef.current.style.display = "none";
      return;
    }

    // const deviceId = micSelectRef.current.value;
    const deviceId = selectMic[0].deviceId;

    record.startRecording({ deviceId }).then(() => {
      setIsRecording(true);
      //   pauseButtonRef.current.style.display = "inline";
    });
  };

  const handlePause = () => {
    if (isPaused) {
      record.resumeRecording();
      setIsPaused(false);
    } else {
      record.pauseRecording();
      setIsPaused(true);
    }
  };

  return (
    <div className="screen-container">
      {/* <button id="record" onClick={handleRecord} disabled={isPaused}>
        {isRecording || isPaused ? "Stop" : "Record"}
      </button>

      <button
        id="pause"
        ref={pauseButtonRef}
        onClick={handlePause}
        style={{ display: "none" }}
      >
        Pause
      </button> */}
      <Button
        text={isRecording || isPaused ? "Stop Recording" : "Start Recording"}
        disabled={isPaused}
        onClick={handleRecord}
      />
      {isRecording && (
        <Button outline text={"Pause Recording"} onClick={handlePause} />
      )}

      {/* <select id="mic-select" ref={micSelectRef}>
        <option value="" hidden>
          Select mic
        </option>
      </select> */}
      {/* <Dropdown
        id="mic-select"
        ref={micSelectRef}
        data={transformArray(selectMic)}
        selected={selectedMic}
        onChange={() => {}}
      /> */}

      <p id="progress">{progress}</p>

      <div
        id="mic"
        ref={micRef}
        style={{
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      ></div>

      <div
        id="recordings"
        ref={recordingsRef}
        style={{
          margin: "1rem 0",
        }}
      ></div>
    </div>
  );
};

export { Recorder };
