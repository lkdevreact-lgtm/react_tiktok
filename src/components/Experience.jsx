import { CameraControls, Environment, Gltf } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef, useEffect } from "react";
import { GreenScreenVideo } from "./GreenScreenVideo";
import { useVideoStore } from "../hooks/useVideoStore";

export const Experience = () => {
  const controls = useRef();
  const selectedVideo = useVideoStore((s) => s.selectedVideo);
  const selectedSound = useVideoStore((s) => s.selectedSound);
  const audioRef = useRef(null);

  useEffect(() => {
    if (selectedSound) {
      if (!audioRef.current) {
        audioRef.current = new Audio(selectedSound);
        audioRef.current.loop = true;
      } else {
        audioRef.current.src = selectedSound;
      }
      audioRef.current.play().catch(e => console.warn("Audio play error", e));
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [selectedSound]);

  return (
    <>
      <CameraControls
        ref={controls}
        maxPolarAngle={Math.PI / 2}
        minDistance={1}
        maxDistance={10}
      />
      <Environment preset="sunset" />
      <directionalLight intensity={2} position={[10, 10, 5]} />
      <directionalLight intensity={1} position={[-10, 10, 5]} />
      <group position-y={-1.4} position-x={-0.5} position-z={-3}>
        <Gltf
          src="models/stage.glb"
          position-z={-1.4}
          position-x={-0.5}
          scale={0.65}
        />
      </group>

      {/* Green screen video plane — shows when a video is selected */}
      {selectedVideo && (
        <GreenScreenVideo
          videoSrc={selectedVideo}
          position={[0, 0.6, -0.8]}
          scale={[2.4, 1.35, 1]}
        />
      )}

      <EffectComposer>
        <Bloom mipmapBlur intensity={0.7} />
      </EffectComposer>
    </>
  );
};
