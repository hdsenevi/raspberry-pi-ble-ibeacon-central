const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();
// const BeaconMapper = require('./utils/beaconDataMapper.js');

// Set an Event handler for becons
scanner.onadvertisement = (advertisement) => {
  if (advertisement.beaconType === 'iBeacon') {
    const beacon = beaconMapper(advertisement);
    console.log(JSON.stringify(beacon));
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
