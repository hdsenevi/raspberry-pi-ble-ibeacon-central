const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();

// Set an Event handler for becons
scanner.onadvertisement = (advertisement) => {
  if (advertisement.beaconType === 'iBeacon') {
    const iBeacon = {
      "uuid": advertisement.iBeacon.uuid,
      "major": advertisement.iBeacon.major,
      "minor": advertisement.iBeacon.minor,
      "txPower": advertisement.iBeacon.txPower
    }
    console.log(JSON.stringify(iBeacon));
  }
};

// Start scanning
scanner.startScan().then(() => {
  console.log('Started to scan.')  ;
}).catch((error) => {
  console.error(error);
});
