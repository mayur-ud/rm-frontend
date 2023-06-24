import { Evidences } from "./Evidences";

export interface FR2EvidenceProps {
    evidences: Evidences;
    setEvidences: React.Dispatch<React.SetStateAction<Evidences>>;
    frNo : String
}