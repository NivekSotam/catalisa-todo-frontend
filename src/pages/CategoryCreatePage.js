import {
    Button, Card,
    Col, Form, Layout, Row,
    Typography, Modal, Checkbox
} from 'antd';
import { useCallback, useState } from 'react';
import axios from 'axios';

import InputText from '../components/InputText';
import { validateTitulo } from '../helpers/validation-helper';
import Title from 'antd/lib/skeleton/Title';

const { Content } = Layout;
const { title } = Typography;

const CategoryCreatePage = () => {
    const [formValues, setFormValues] = useState('')

    const [loading, setLoading] = useState(false);


    
    return(
        <Content>
            <Row 
                justify='center'
            >
                <Col xs={24} sl={14} md={12} lg={10} xl={8}>
                    <Title
                    type='Primary'
                    style={{textAlign: 'center', marginTop: 8 }}
                    >
                        Criar Categoria
                    </Title>
                    <Form layout="vertical">

                        
                    </Form>
                </Col>
            </Row>
        </Content>
    )
}

export default CategoryCreatePage