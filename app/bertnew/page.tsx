
import * as React from 'react';
import Box from '@mui/material/Box';
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import Divider from "@mui/material/Divider"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function currentBert() {

  const formUrl =
  "https://script.google.com/macros/s/AKfycbxeNY9obePE3-23RJdMMX40pXICZnM2MepLNWcfikNnBD_TCPULbHbZFor1n5GiF4kR7Q/exec"

  const labelLeft = {
    height: "100%",
    padding: "24px 24px 24px 0px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    minWidth: "160px",
    fontSize: "16px",
  }
  
  const labelRight = {
    height: "100%",
    padding: "24px 0px 24px 24px ",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    minWidth: "160px",
    fontSize: "16px",
  }
  
  const buttonStyle = {
    maxWidth: "70%",
    backgroundColor: "#0099ff",
    borderRadius: "4px",
    border: "none",
    color: "#fff",
    margin: "0 auto",
    padding: "12px 32px",
    fontSize: "16px",
    cursor: "pointer",
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:gap-16 md:gap-8 lg:p-24 md:p-12">
        <Box component="section" className='flex justify-center min-h-4/6' sx={{ width: '100%', height:'80vh' }}>
        <iframe 
            width="1200" 
            height="100%" 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fov5YtfX0qu8qT5A4Wmkrw5%2FIDP_AdminDashRefresh_Q1_2024%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D511-161743%26viewport%3D2679%252C-4688%252C0.48%26t%3Du0ACQlCvmhYEr9Ke-1%26scaling%3Dcontain%26starting-point-node-id%3D511%253A161743%26mode%3Ddesign" 
        />
        </Box>
        <Box component="section" className='md:max-w-full lg:max-w-screen-md' sx={{ width: '100%', p: 2, }}>
        <Typography variant="body1" gutterBottom>What best describes the feeling of what you have seen above?</Typography>
        <form action={formUrl} method="post" target="_blank" className="flex flex-col" >
            <FormControl key="controlId" className='pb-8'>
                <RadioGroup
                    row
                    className='justify-between'
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    key="uniqueId1"
                    >
                    <FormLabel
                        id="pair1-group-label"
                        style={labelLeft}
                        key="uniquelabel1"
                    >
                        Intuitive
                    </FormLabel>
                    <FormControlLabel
                        value="-2"
                        name="pair1"
                        control={<Radio />}
                        label=""
                        key="uniqueId1a"
                    />
                    <FormControlLabel
                        value="-1"
                        name="pair1"
                        control={<Radio />}
                        label=""
                        key="uniqueId1b"
                    />
                    <FormControlLabel
                        value="0"
                        name="pair1"
                        control={<Radio />}
                        label=""
                        key="uniqueId1c"
                    />
                    <FormControlLabel
                        value="1"
                        name="pair1"
                        control={<Radio />}
                        label=""
                        key="uniqueId1d"
                    />
                    <FormControlLabel
                        value="2"
                        name="pair1"
                        control={<Radio />}
                        label=""
                        key="uniqueId1e"
                    />
                    <FormLabel
                        id="pair1-group-label"
                        style={labelRight}
                        key="uniquelabel2"
                    >
                        Advanced
                    </FormLabel>
                </RadioGroup>

                <Divider />

                <RadioGroup
                    row
                    className='justify-between'
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    key="uniqueId2"
                >
                    <FormLabel
                        id="pair2-group-label"
                        style={labelLeft}
                        key="uniquelabel3"
                    >
                        Conventional
                    </FormLabel>
                    <FormControlLabel
                        value="-2"
                        name="pair2"
                        control={<Radio />}
                        label=""
                        key="uniqueId2a"
                    />
                    <FormControlLabel
                        value="-1"
                        name="pair2"
                        control={<Radio />}
                        label=""
                        key="uniqueId2b"
                    />
                    <FormControlLabel
                        value="0"
                        name="pair2"
                        control={<Radio />}
                        label=""
                        key="uniqueId2c"
                    />
                    <FormControlLabel
                        value="1"
                        name="pair2"
                        control={<Radio />}
                        label=""
                        key="uniqueId2d"
                    />
                    <FormControlLabel
                        value="2"
                        name="pair2"
                        control={<Radio />}
                        label=""
                        key="uniqueId2e"
                    />
                    <FormLabel
                        id="pair2-group-label"
                        style={labelRight}
                        key="uniquelabel4"
                    >
                        Innovative
                    </FormLabel>
                </RadioGroup>

                <Divider />

                <RadioGroup
                    row
                    className='justify-between'
                    aria-labelledby="pair3-group-label"
                    name="row-radio-buttons-group"
                    key="uniqueId3"
                >
                    <FormLabel
                        id="demo-row-radio-buttons-group-label"
                        style={labelLeft}
                        key="uniquelabel5"
                    >
                        Informative
                    </FormLabel>
                    <FormControlLabel
                        value="-2"
                        name="pair3"
                        control={<Radio />}
                        label=""
                        key="uniqueId3a"
                    />
                    <FormControlLabel
                        value="-1"
                        name="pair3"
                        control={<Radio />}
                        label=""
                        key="uniqueId3b"
                    />
                    <FormControlLabel
                        value="0"
                        name="pair3"
                        control={<Radio />}
                        label=""
                        key="uniqueId3c"
                    />
                    <FormControlLabel
                        value="1"
                        name="pair3"
                        control={<Radio />}
                        label=""
                        key="uniqueId3d"
                    />
                    <FormControlLabel
                        value="2"
                        name="pair3"
                        control={<Radio />}
                        label=""
                        key="uniqueId3e"
                    />
                    <FormLabel
                        id="pair3-group-label"
                        style={labelRight}
                        key="uniquelabel6"
                    >
                        Distracting
                    </FormLabel>
                </RadioGroup>

                <Divider />

                <RadioGroup
                    row
                    className='justify-between'
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    key="uniqueId4"
                >
                    <FormLabel
                        id="pair4-group-label"
                        style={labelLeft}
                        key="uniquelabel7"
                    >
                        Interactive
                    </FormLabel>
                    <FormControlLabel
                        value="-2"
                        name="pair4"
                        control={<Radio />}
                        label=""
                        key="uniqueId4a"
                    />
                    <FormControlLabel
                        value="-1"
                        name="pair4"
                        control={<Radio />}
                        label=""
                        key="uniqueId4b"
                    />
                    <FormControlLabel
                        value="0"
                        name="pair4"
                        control={<Radio />}
                        label=""
                        key="uniqueId4c"
                    />
                    <FormControlLabel
                        value="1"
                        name="pair4"
                        control={<Radio />}
                        label=""
                        key="uniqueId4d"
                    />
                    <FormControlLabel
                        value="2"
                        name="pair4"
                        control={<Radio />}
                        label=""
                        key="uniqueId4e"
                    />
                    <FormLabel
                        id="demo-row-radio-buttons-group-label"
                        style={labelRight}
                        key="uniquelabel8"
                    >
                        Observational
                    </FormLabel>
                </RadioGroup>

                <Divider />

                <RadioGroup
                    row
                    className='justify-between'
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    key="uniqueId5"
                >
                    <FormLabel
                        id="pair5-group-label"
                        style={labelLeft}
                        key="uniquelabel9"
                    >
                        Relevant
                    </FormLabel>
                    <FormControlLabel
                        value="-2"
                        name="pair5"
                        control={<Radio />}
                        label=""
                        key="uniqueId5a"
                    />
                    <FormControlLabel
                        value="-1"
                        name="pair5"
                        control={<Radio />}
                        label=""
                        key="uniqueId5b"
                    />
                    <FormControlLabel
                        value="0"
                        name="pair5"
                        control={<Radio />}
                        label=""
                        key="uniqueId5c"
                    />
                    <FormControlLabel
                        value="1"
                        name="pair5"
                        control={<Radio />}
                        label=""
                        key="uniqueId5d"
                    />
                    <FormControlLabel
                        value="2"
                        name="pair5"
                        control={<Radio />}
                        label=""
                        key="uniqueId5e"
                    />
                    <FormLabel
                        id="pair5-group-label"
                        style={labelRight}
                        key="uniquelabel10"
                    >
                        Overwhelming
                    </FormLabel>
                </RadioGroup>
                <Divider />
            </FormControl>

            <Button type="submit"  className="flex max-w-md justify-center rounded-md bg-blue-500 px-6 py-2 text-sm font-regular normal-case leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 self-center">Send response</Button>

        </form>    
    </Box>     
    </main>
  );
}


