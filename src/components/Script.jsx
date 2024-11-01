import style from './Script.module.css'
import Card from './Card';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

export default function Script() {

    return(
        <div className={style.container}>
            <h2 align='center' id='Scripts' className={style.script}>Scripts</h2>
            <div className='gridContainer'>
                <Row className="g-2">
                <Col md={6} lg={3}>
                        <Card
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRJckxgd8yUbfyJY0SweLom2kpfxIOIFT6w&s" 
                            title="Auto /buy + drop" 
                            description="Auto /buy in gtps elite ps" 
                        />
                    </Col>
                    <Col md={6} lg={3}>
                        <Card 
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRJckxgd8yUbfyJY0SweLom2kpfxIOIFT6w&s" 
                            title="Auto Take From Mag" 
                            description="Auto retrieve items from magplant" 
                        />
                    </Col>

                    <Col md={6} lg={3}>
                        <Card 
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRJckxgd8yUbfyJY0SweLom2kpfxIOIFT6w&s" 
                            title="Auto buy from gem store" 
                            description="Auto bulk buy using this script" 
                        />
                    </Col>
                    
                    <Col md={6} lg={3}>
                        <Card 
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRJckxgd8yUbfyJY0SweLom2kpfxIOIFT6w&s" 
                            title="Auto buy from gem store" 
                            description="Auto bulk buy using this script" 
                        />
                    </Col>
                    <Col md={6} lg={3}>
                        <Card 
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRJckxgd8yUbfyJY0SweLom2kpfxIOIFT6w&s" 
                        />
                    </Col>
                    <Col md={6} lg={3}>
                        <Card 
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRJckxgd8yUbfyJY0SweLom2kpfxIOIFT6w&s" 
                        />
                    </Col>
                    <Col md={6} lg={3}>
                        <Card 
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRJckxgd8yUbfyJY0SweLom2kpfxIOIFT6w&s" 
                        />
                    </Col>
                    <Col md={6} lg={3}>
                        <Card 
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRJckxgd8yUbfyJY0SweLom2kpfxIOIFT6w&s" 
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}