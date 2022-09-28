import Image from "next/image"
import check from "../assets/pricing/desktop/check.svg"
import TableMobileStyle from "../styles/TableMobile.styled"

const TableMobile = () => {
  return (
    <TableMobileStyle>
      <table>
        <tr>
          <th>The features</th>
        </tr>
        <tr>
          <tr>Unlimited story posting</tr>
          <td>
            <th>Basic</th>
            <Image src={check} />
          </td>
          <td>
            <th>Pro</th>
            <Image src={check} />
          </td>
          <td>
            <th>Business</th>
            <Image src={check} />
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </table>
    </TableMobileStyle>
  );
}

export default TableMobile