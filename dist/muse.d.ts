/// <reference types="web-bluetooth" />
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
    AccelerometerData,
    EEGReading,
    EventMarker,
    GyroscopeData,
    MuseControlResponse,
    MuseDeviceInfo,
    PPGReading,
    TelemetryData,
    XYZ,
} from './lib/muse-interfaces';
export { zipSamples, EEGSample } from './lib/zip-samples';
export { zipSamplesPpg, PPGSample } from './lib/zip-samplesPpg';
export {
    EEGReading,
    PPGReading,
    TelemetryData,
    AccelerometerData,
    GyroscopeData,
    XYZ,
    MuseControlResponse,
    MuseDeviceInfo,
};
export declare const MUSE_SERVICE = 65165;
export declare const PPG_FREQUENCY = 64;
export declare const PPG_SAMPLES_PER_READING = 6;
export declare const EEG_FREQUENCY = 256;
export declare const EEG_SAMPLES_PER_READING = 12;
export declare const ppgChannelNames: string[];
export declare const channelNames: string[];
export declare class MuseClient {
    enableAux: boolean;
    enablePpg: boolean;
    deviceName: string | null;
    connectionStatus: BehaviorSubject<boolean>;
    rawControlData: Observable<string>;
    controlResponses: Observable<MuseControlResponse>;
    telemetryData: Observable<TelemetryData>;
    gyroscopeData: Observable<GyroscopeData>;
    accelerometerData: Observable<AccelerometerData>;
    eegReadings: Observable<EEGReading>;
    ppgReadings: Observable<PPGReading>;
    eventMarkers: Subject<EventMarker>;
    private gatt;
    private controlChar;
    private eegCharacteristics;
    private ppgCharacteristics;
    private lastIndex;
    private lastTimestamp;
    private getTimestamp;
    connect(gatt?: BluetoothRemoteGATTServer): Promise<void>;
    sendCommand(cmd: string): Promise<void>;
    start(): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    deviceInfo(): Promise<MuseDeviceInfo>;
    injectMarker(value: string | number, timestamp?: number): Promise<void>;
    disconnect(): void;
}
