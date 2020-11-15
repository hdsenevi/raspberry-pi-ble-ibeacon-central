const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();
// const BeaconMapper = require('./utils/beaconDataMapper.js');

const devices = new Set();

// Set an Event handler for becons
scanner.onadvertisement = (advertisement) => {
  if (advertisement.beaconType === 'iBeacon') {
    const beacon = beaconMapper(advertisement);
    console.clear();
    devices[advertisement.iBeacon.uuid] = beacon;
    console.log(devices);
  }
};

// Start scanning
scanner.startScan().then(() => {
  console.log('Started to scan.');
}).catch((error) => {
  console.error(error);
});

const beaconMapper = (advertisement) => {
  return {
    "uuid": advertisement.iBeacon.uuid,
    "major": advertisement.iBeacon.major,
    "minor": advertisement.iBeacon.minor,
    "txPower": advertisement.iBeacon.txPower,
    "rssi": advertisement.rssi,
  }
}
