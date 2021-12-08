import { useEffect, useState } from "react";
import { Layout, Row, Col, Table, Modal, Button } from "antd";
import axios from "axios";
const { Content } = Layout;

const { Column } = Table;

const CategoryListPage = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    const requestCategory = async () =>{
        try{
            setLoading(true);
            const response = await axios.get('/categoria')
            setCategory(response.data);
        } catch (error){
            console.warn(error);
            Modal.error({
                title: "Não foi possivel carregar suas categias"
            })
        }

    }
    
    return(
        <Content>
            <Row gutter={[24, 24]} justify="center">
                <Col span={23}>
                    <Table 
                    
                    >

                    </Table>
                </Col>
            </Row>
        </Content>
    )
}

export default CategoryListPage;