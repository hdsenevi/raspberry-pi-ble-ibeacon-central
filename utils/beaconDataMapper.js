export default BeaconMapper = (advertisement) => {
    return {
        "uuid": advertisement.iBeacon.uuid,
        "major": advertisement.iBeacon.major,
        "minor": advertisement.iBeacon.minor,
        "txPower": advertisement.iBeacon.txPower,
        "rssi": advertisement.rssi,
    }
}