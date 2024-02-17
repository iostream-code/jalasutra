import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "flowbite-react";
import { MdAddCircleOutline } from "react-icons/md";
import Api from "../../api/index";
import Nav from "../../components/partial/Nav";

const ServiceIndex = () => {
    const [services, setServices] = useState([]);

    const fetchSservices = async () => {
        await Api.get('/api/services')
            .then(response => {
                setServices(response.data.data.data);
            })
    }

    useEffect(() => {
        fetchSservices();
    }, [])

    const parent = "layanan"
    const page = null

    return (
        <>
            <div className="grid grid-cols-2">
                <span>
                    <Nav parent={parent} page={page} />
                </span>
                <div className="mb-4 place-self-end ">
                    <Link to="/layanan/tambah">
                        <Button color="green">
                            <MdAddCircleOutline className="mr-2 h-5 w-5" />
                            Tambah
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Nama</Table.HeadCell>
                        <Table.HeadCell>Jenis</Table.HeadCell>
                        <Table.HeadCell>Deskripsi</Table.HeadCell>
                        <Table.HeadCell>Gambar</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            services.length > 0 ?
                                services.map((service, index) => {
                                    return (
                                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
                                            <Table.Cell>{service.name}</Table.Cell>
                                            <Table.Cell>{service.type.type}</Table.Cell>
                                            <Table.Cell>{service.description}</Table.Cell>
                                            <Table.Cell>
                                                <img className="max-w-24 mx-auto" src={service.icon} alt="image description" />
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a href={`/layanan/${service.id}`} className="me-2 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Show
                                                </a>
                                                <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
                                                    Delete
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                })
                                :
                                <Table.Row className="text-center bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell colSpan={6}>
                                        Data Masih Kosong
                                    </Table.Cell>
                                </Table.Row>
                        }
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default ServiceIndex