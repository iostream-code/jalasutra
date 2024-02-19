import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "flowbite-react";
import { MdAddCircleOutline } from "react-icons/md";
import Api from "../../api/index";
import Nav from "../../components/partial/Nav";
import Swal from "sweetalert2";

const ServiceIndex = () => {
    const [services, setServices] = useState([])
    const [links, setLinks] = useState([])

    const url = '/api/services'

    const fetchServices = async (url) => {
        await Api.get(url)
            .then(response => {
                setServices(response.data.data.data)
                setLinks(response.data.data)
            })
    }

    useEffect(() => {
        fetchServices(url);
    }, [])

    function deleteConfirmation(id) {
        Swal.fire({
            title: "Apakah Anda yakin menghapus layanan ini?",
            text: "Mohon periksa kembali!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya",
            cancelButtonText: "Tidak",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteService(id);
                Swal.fire({
                    title: "Dihapus!",
                    text: "Layanan telah dihapus.",
                    icon: "success"
                });
            }
        });
    }

    const deleteService = async (id) => {
        await Api.delete(`/api/services/${id}`)
            .then(() => {
                fetchServices();
            })
    }

    const handlePage = (url) => {
        fetchServices(url)
    }

    const parent = "layanan"
    const child = null

    return (
        <>
            <div className="grid grid-cols-2">
                <span>
                    <Nav parent={parent} child={child} />
                </span>
                <div className="mb-4 place-self-end ">
                    <Link to="/layanan/tambah">
                        <Button color="light">
                            <MdAddCircleOutline className="mr-2 h-5 w-5" />
                            Tambah
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto mb-4">
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
                                                <div className="flex items-center">
                                                    <a href={`/layanan/${service.id}`} className="me-2 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                        Detail
                                                    </a>
                                                    <button type="button" onClick={() => deleteConfirmation(service.id)} className="font-medium text-red-600 hover:underline dark:text-red-500">
                                                        Hapus
                                                    </button>
                                                </div>
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
            {
                links.last_page > 1 &&
                <div className="flex flex-row justify-end">
                    <nav aria-label="Page navigation example">
                        <ul className="flex items-center -space-x-px h-10 text-base rounded-lg bg-slate-300 p-2">
                            {
                                links.links.map((link, index) => {
                                    return (
                                        link.active ?
                                            <li key={index}>
                                                <button
                                                    type="button"
                                                    onClick={() => handlePage(link.url)}
                                                    aria-current="page"
                                                    className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                                                    {link.label.replace('&laquo;', '').replace('&raquo;', '')}
                                                </button>
                                            </li>
                                            :
                                            <li key={index}>
                                                <button
                                                    type="button"
                                                    onClick={() => handlePage(link.url)}
                                                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                    {link.label.replace('&laquo;', '').replace('&raquo;', '')}
                                                </button>
                                            </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            }
        </>
    )
}

export default ServiceIndex