import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import '../Component/Faq.css';


export default function Faq(){

    return(
        <div className='container questions'>
            <h2> FAQ Questions</h2>
            <Accordion>
                <AccordionItem eventKey='0'>
                    <AccordionHeader>
                        Is this a good product?
                    </AccordionHeader>
                    <AccordionBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey='1'>
                    <AccordionHeader>
                        How do we use it?
                    </AccordionHeader>
                    <AccordionBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey='2'>
                    <AccordionHeader>
                        How to maintain the product?
                    </AccordionHeader>
                    <AccordionBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
       </div>
    )
}

