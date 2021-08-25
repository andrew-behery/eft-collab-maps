import Head from 'next/head';
import Image from 'next/image';
import {ReactSketchCanvas} from 'react-sketch-canvas';

export default function Home() {
  return (
    <div className="border-4 border-indigo-600 h-screen">
      <Head>
        <title>Tarkov Collaberative Maps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-testid="canvasId" className="h-full">
        <ReactSketchCanvas
          //style={styles}
          //width="100rem"
          //height="100rem"
          strokeWidth={4}
          strokeColor="black"
        />
      </div>
    </div>
  );
}
