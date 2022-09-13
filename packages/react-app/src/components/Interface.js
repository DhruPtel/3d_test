import '../App.css';
import { Suspense, useState } from "react";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Box from "./Box.js";
import Buddy from "./Buddy.js";

function Interface() {
  return (
    <div className="Interface">
      <Canvas style={{ width: "70vh", height: "80vh"}} >
        <ambientLight />
        <Suspense fallback={<Html><div style={{color: 'white'}}>Loading...</div></Html>}>
          <Buddy />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Interface;
