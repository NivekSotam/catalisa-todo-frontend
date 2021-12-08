import {
    Button, Card,
    Col, Form, Layout, Row,
    Typography, Modal, Checkbox
} from 'antd';
import { useCallback, useState } from 'react';
import axios from 'axios';

import InputText from '../components/InputText';
import { validateTitulo } from '../helpers/validation-helper';


const { Content } = Layout;
const { Title } = Typography;


const TaskCreatePage = () => {
    const [formValues, setFormValues] = useState({concluida: false, titulo: ''})

    const [loading, setLoading] = useState(false);

    const handleSubscription = useCallback(async () => {
        try {
            setLoading(true);
            console.log({ formValues });
            const { titulo, concluida } = formValues;
            if (!titulo) return;

            const body = {
                titulo: titulo,
                concluida: concluida
            }

            await axios.post('/tarefas', body);
            Modal.success({
                title: 'Tarefa cadastrada.',
            })

        }   catch (error) {
            console.warn(error);
            const { response } = error;
            if (response?.status === 400) {
                Modal.error({
                    title: response.data.mensagem
                });
            } else {
                Modal.error({
                    title: 'Não foi possível cadastrar, tente novamente mais tarde.'
                })
            }
        }   finally {
            setLoading(false);
        }
    }, [formValues]);

    const handleInputChange = useCallback((event) => {
        const { value } = event.target;

        setFormValues({
            ...formValues,
            titulo: value,
        })
    }, [formValues]);

    const handleInputCheckbox = useCallback((event) => {

        const { checked } = event.target;
        
        setFormValues({
            ...formValues,
            concluida: checked,
        })
    }, [formValues])

    return (
        <Content>
            <Row
                justify="center"
            >
                <Col xs={24} sl={14} md={12} lg={10} xl={8}>
                    <Card style={{ margin: 24 }}>
                        <Title
                            type='Primary'
                            style={{ textAlign: 'center', marginTop: 8 }}
                        >
                            Criar Tarefa
                        </Title>

                        <Form layout="vertical">

                            <InputText
                                name="secondary"
                                label="Título"
                                size="large"
                                validate={validateTitulo}
                                onChange={handleInputChange}
                                validate={validateTitulo}
                                required
                            />

                            <Checkbox
                              title="Concluida"
                              dataIndex="concluida"
                              key="concluida"
                              onChange={handleInputCheckbox}
                            >
                                Concluído
                            </Checkbox>

                            <Button
                                block
                                type="primary"  
                                size="large"
                                onClick={handleSubscription}
                                loading={loading}
                            >
                                Cadastrar
                            </Button>

                        </Form>
                    </Card>
                </Col>  
            </Row>
        </Content>
    )
}

export default TaskCreatePage;