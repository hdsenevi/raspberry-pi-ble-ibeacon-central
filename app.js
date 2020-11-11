const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();
import { beaconMapper } from './utils/beaconDataMapper.js';

// Set an Event handler for becons
scanner.onadvertisement = (advertisement) => {
  if (advertisement.beaconType === 'iBeacon') {
    const beacon = beaconMapper(advertisement);
    console.log(JSON.stringify(beacon));
  }
};

// Start scanning
scanner.startScan().then(() => {
  console.log('Started to scan.')  ;
}).catch((error) => {
  console.error(error);
});
