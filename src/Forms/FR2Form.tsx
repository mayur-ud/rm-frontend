import {
  Accordion,
  Box,
  Button,
  Group,
  Modal,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import React, {  useEffect, useState } from "react";
import { useEvidenceContext } from '../Store/EvidenceStore'
import { Evidence } from "../interface/Evidence";

interface props {
    frNo : Number
}

function FR2Form ({frNo} : props) {
//   const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | null>(null);
  const [text, setText] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const { addEvidence , getEvidence , getModalState} = useEvidenceContext();

  const evidence = getEvidence(frNo)
  const [opened , {open , close}] = getModalState(frNo)

  console.log(evidence , open , close, 'EACH FORM' , frNo)
  

//   useEffect(() => {
//     setEvidence(getEvidence(frNo))

//     return () => {
//       // Code to run on component unmount
//     };
//   }, [evidence,frNo,getEvidence]); // Empty dependency array to run effect only on mount/unmount


  return (
    <Box>
      <Box > 
        {evidence.length > 0 ? (
          <Accordion variant="separated">
            {evidence?.map((evid: Evidence, index : Number) => {
              return (
                <Accordion.Item value={`Evidence ${index}`} key={String(index)}>
                  <Accordion.Control>{`Evidence ${index}`}</Accordion.Control>
                  <Accordion.Panel>{evid.query}</Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        )
         :
          <Text>NO Records found , Add Evience Blocks to Show here</Text>}
      </Box>
      <Button my="sm" onClick={open}>
        + Evidence Block
      </Button>

      <Modal opened={opened} onClose={close} title={`Evidence Block for FR${frNo}`}>
        <Select
          withAsterisk
          value={value}
          onChange={setValue}
          label="Select The Environment of Evidence"
          placeholder="Pick one"
          data={[
            { value: "SQL", label: "SQL" },
            { value: "PL-SQL", label: "PL-SQL" },
            { value: "Bash", label: "Bash Script" },
          ]}
        />
        <TextInput
          label="Optional Text Description"
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
        />
        <TextInput
          my="md"
          disabled={value == null}
          label={
            value
              ? `${value} Code for this Evidence Block`
              : "Select Environment First"
          }
          withAsterisk
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
        />
        {/* <Dropzone
            maxSize={2}
        openRef={openRef}
        onDrop={(files) => {console.log(`Accepted ${files}`)}}
        activateOnClick={false}
        styles={{ inner: { pointerEvents: 'all' } }}
      >
        <Group position="center" m='md'>
          <Button onClick={() => {if (openRef.current) {
      openRef.current();}
    }}>Select files</Button>
        </Group>
      </Dropzone> */}
        <Group position="center">
          <Button
          key={String(frNo)}
            disabled={value == null || (value != null && query.length <= 0)}
            onClick={() => {
              const newEvidence = {
                text: text,
                query: query,
              };
            addEvidence(frNo,newEvidence)
            close()
            setQuery('')
            setText('')
            setValue(null)
            }}
          >
            Add Evidence
          </Button>
        </Group>
      </Modal>
    </Box>
  );
}

export default FR2Form;
