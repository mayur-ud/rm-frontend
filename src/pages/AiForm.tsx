import { Button } from "@mantine/core";
import "./AiForm.css";
import FR2Form from "../Forms/FR2Form";
import { useEvidenceContext } from "../Store/EvidenceStore";

const AiForm = () => {

  const {evidences} = useEvidenceContext()
  console.log(evidences , 'AIFORM')

  const data = [
    {'label' : evidences.FR2 , 'frNo' : 2},
    {'label' : evidences.FR3 , 'frNo' : 3},
    {'label' : evidences.FR4 , 'frNo' : 4},
    {'label' : evidences.FR5 , 'frNo' : 5}
  ]

  return (
    <div className="container">
      
      {data.map((ele)=>(
        <div className="row" key={ele.frNo}>
        <div className="label" >
          <div className="label-text" >
            FR2
            <Button disabled={ele.label.length === 0} sx={{ display: "block" }} >Check</Button>
          </div>
        </div>
        <div className="column" >
          <FR2Form frNo={ele.frNo} key={`${ele.frNo}FORM`}/>
        </div>
      </div>
      ))}
      {/* <div className="row">
        <div className="label">
          <div className="label-text">
            FR2
            <Button disabled={evidences.FR2.length === 0} sx={{ display: "block" }}>Check</Button>
          </div>
        </div>
        <div className="column">
          <FR2Form frNo={2} />
        </div>
      </div>

      <div className="row">
        <div className="label">
          <div className="label-text">
            FR3
            <Button disabled={evidences.FR3.length === 0} sx={{ display: "block" }}>Check</Button>
          </div>
        </div>
        <div className="column">
          <FR2Form frNo={3} />
        </div>
      </div>

      <div className="row">
        <div className="label">
          <div className="label-text">
            FR4
            <Button disabled={evidences.FR4.length === 0} sx={{ display: "block" }}>Check</Button>
          </div>
        </div>
        <div className="column">
          <FR2Form frNo={4} />``
        </div>
      </div>

      <div className="row">
        <div className="label">
          <div className="label-text">
            FR5
            <Button disabled={evidences.FR5.length === 0} sx={{ display: "block" }}>Check</Button>
          </div>
        </div>
        <div className="column">
          <FR2Form frNo={5} />
        </div>
      </div> */}
    </div>
  );
};

export default AiForm;
