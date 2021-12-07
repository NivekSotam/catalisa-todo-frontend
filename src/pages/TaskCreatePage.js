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
    const [formValues, setFormValues] = useState({ titulo: '', concluida: false })
    const [loading, setLoading] = useState(false);

    const TaskCreatePage = () => {
        try {
            setLoading(true);

            const { titulo, concluida } = formValues;

            if (!titulo) return;

            const body = {
                titulo: titulo,
                concluida: concluida
            }

            await axios.post('/tarefas', body);

            Modal.success({
                title: 'Tarefa criada com sucesso'
            })

        } catch (error) {
            console.warn(error);
            const { response } = error;
            if (response?.status === 400) {
                Modal.error({
                    title: response.data.mensagem
                });
            } else {
                Modal.error({
                    title: 'Não foi cadastrar-se, tente novamente mais tarde.'
                })
            }
        } finally {
            setLoadsing(false);
        }
    }, [formValues]
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
                                // onChange={}
                                validate={validateTitulo}
                                required
                            />
                            <Checkbox>
                                Concluído
                            </Checkbox>
                            <Button
                                block
                                type="primary"
                                size="large"
                            // onClick={}
                            // loading={loading}
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