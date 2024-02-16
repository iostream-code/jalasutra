import { Table } from "flowbite-react"

const ServiceIndex = () => {
    return (
        <>
            <div>
                <Table>
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
                        <Table.Row></Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default ServiceIndex