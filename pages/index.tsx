import Head from 'next/head';
import Image from 'next/image';
import {ReactSketchCanvas} from 'react-sketch-canvas';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tarkov Collaberative Maps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello, world.
      <div data-testid="canvasId">
        <ReactSketchCanvas
          //style={styles}
          width="600"
          height="400"
          strokeWidth={4}
          strokeColor="red"
        />
      </div>
    </div>
  );
}
