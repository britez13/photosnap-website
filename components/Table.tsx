
import Image from "next/image";
import check from "../assets/pricing/desktop/check.svg";
import {TitleBlack} from "../components/sharedstyles"
import TableStyle from "../styles/Table.styled"

const Table = () => {
  return (
    <TableStyle>
      <TitleBlack>Compare</TitleBlack>
      <table>
        <tr>
          <th>The Features</th>
          <th className='category'>Basic</th>
          <th className='category'>Pro</th>
          <th className='category'>Business</th>
        </tr>
        <tr>
          <th>Unlimited story posting</th>
          <td>
            <Image src={check} alt='check' />
          </td>
          <td>
            <Image src={check} alt='check' />
          </td>
          <td>
            <Image src={check} alt='check' />
          </td>
        </tr>
        <tr>
          <th>Unlimited photo upload</th>
          <td>
            <Image src={check} alt='check' />
          </td>
          <td>
            <Image src={check} alt='check' />
          </td>
          <td>
            <Image src={check} alt='check' />
          </td>
        </tr>
        <tr>
          <th>Embedding custom content</th>
          <td></td>
          <td>
            <Image src={check} alt='check' />
          </td>
          <td>
            <Image src={check} alt='check' />
          </td>
        </tr>
        <tr>
          <th>Customize meta data</th>
          <td></td>
          <td>
            <Image src={check} alt='check' />
          </td>
          <td>
            <Image src={check} alt='check' />
          </td>
        </tr>
        <tr>
          <th>Advanced metrics</th>
          <td></td>
          <td></td>
          <td>
            <Image src={check} alt='check' />
          </td>
        </tr>
        <tr>
          <th>Photo downloads</th>
          <td></td>
          <td></td>
          <td>
            <Image src={check} alt='check' />
          </td>
        </tr>
        <tr>
          <th>Search engine indexing</th>
          <td></td>
          <td></td>
          <td>
            <Image src={check} alt='check' />
          </td>
        </tr>
        <tr>
          <th>Custom analitycs</th>
          <td></td>
          <td></td>
          <td>
            <Image src={check} alt='check' />
          </td>
        </tr>
      </table>
    </TableStyle>
  );
}

export default Table

