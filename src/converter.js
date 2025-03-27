import { AnimationClip, NumberKeyframeTrack } from 'three';

function createAnimation(blendData, morphTargetDictionary, prefix) {
  let tracks = [];
  console.log('Blend Data:', blendData);
  for (let key in blendData) {
    if (blendData.hasOwnProperty(key) && Array.isArray(blendData[key])) {
      let trackName = `${prefix}.morphTargetInfluences[${morphTargetDictionary[key]}]`;
      let times = blendData[key].map((frame) => frame.time);
      let values = blendData[key].map((frame) => frame.value);

      tracks.push(new NumberKeyframeTrack(trackName, times, values));
    }
  }

  return new AnimationClip(null, -1, tracks);
}

export default createAnimation;