interface RTCIceCandidateInfo {
    candidate?: string;
    sdpMLineIndex?: number | null;
    sdpMid?: string | null;
}

export default class RTCIceCandidate {
    candidate: string;
    sdpMLineIndex: number | null;
    sdpMid: string | null;

    constructor({ candidate = '', sdpMLineIndex = null, sdpMid = null }: RTCIceCandidateInfo) {
        this.candidate = candidate;
        this.sdpMLineIndex = sdpMLineIndex;
        this.sdpMid = sdpMid;
    }

    toJSON() {
        return {
            candidate: this.candidate,
            sdpMLineIndex: this.sdpMLineIndex,
            sdpMid: this.sdpMid
        };
    }
}
