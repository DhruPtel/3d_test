import '../App.css';
import { Suspense, useState } from "react";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Pod from "./Pod.js";

function Interface() {
  return (
    <div className="LakeInterface">
      <Canvas style={{ width: "70vh", height: "80vh" }} className="pod" >
        <ambientLight />
        <Suspense fallback={<Html><div style={{color: 'white'}}>Loading...</div></Html>}>
          <Pod />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Interface;
