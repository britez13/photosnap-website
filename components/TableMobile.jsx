import Image from "next/image";
import check from "../assets/pricing/desktop/check.svg";
import TableMobileStyle from "../styles/TableMobile.styled";

const TableMobile = () => {
  return (
    <TableMobileStyle>
      <div>
        <h3 className='subtitle'>The features</h3>
      
          <div className='wrapper'>
            <h3>Unlimited story posting</h3>
            <div className='item'>
              <div>
                <p>Basic</p>
                <Image src={check} />
              </div>
              <div>
                <p>Pro</p>
                <Image src={check} />
              </div>
              <div>
                <p>Business</p>
                <Image src={check} />
              </div>
            </div>
          </div>
          
          <div className='wrapper'>
            <h3>Unlimited photo upload</h3>
              <div className='item'>
                <div>
                  <p>Basic</p>
                  <Image src={check} />
                </div>
                <div>
                  <p>Pro</p>
                  <Image src={check} />
                </div>
                <div>
                  <p>Business</p>
                  <Image src={check} />
                </div>
              </div>
            </div>

            <div className='wrapper'>
              <h3>Embedding custom content</h3>
              <div>
                <div className='item'>
                  <div>
                    <p>Basic</p>
                    {/* <Image src={check} /> */}
                  </div>
                  <div>
                    <p>Pro</p>
                    <Image src={check} />
                  </div>
                  <div>
                    <p>Business</p>
                    <Image src={check} />
                  </div>
                </div>
              </div>
            </div>

            <div className='wrapper'>
              <h3>Customize metadata</h3>
              <div className='item'>
                <div>
                  <p>Basic</p>
                  {/* <Image src={check} /> */}
                </div>
                <div>
                  <p>Pro</p>
                  <Image src={check} />
                </div>
                <div>
                  <p>Business</p>
                  <Image src={check} />
                </div>
              </div>
            </div>

            <div className='wrapper'>
              <h3>Advanced metrics</h3>
              <div className='item'>
                <div>
                  <p>Basic</p>
                </div>
                <div>
                  <p>Pro</p>
                </div>
                <div>
                  <p>Business</p>
                  <Image src={check} />
                </div>
              </div>
            </div>

            <div className='wrapper'>
              <h3>Photo downloads</h3>
              <div className='item'>
                <div>
                  <p>Basic</p>
                </div>
                <div>
                  <p>Pro</p>
                </div>
                <div>
                  <p>Business</p>
                  <Image src={check} />
                </div>
              </div>
            </div>

            <div className='wrapper'>
              <h3>Search engine indexing</h3>
              <div className='item'>
                <div>
                  <p>Basic</p>
                </div>
                <div>
                  <p>Pro</p>
                </div>
                <div>
                  <p>Business</p>
                  <Image src={check} />
                </div>
              </div>
            </div>

            <div className='wrapper'>
              <h3>Custom analytics</h3>
              <div className='item'>
                <div>
                  <p>Basic</p>
                </div>
                <div>
                  <p>Pro</p>
                </div>
                <div>
                  <p>Business</p>
                  <Image src={check} />
                </div>
              </div>
            </div>
            
          {/* </div> */}
        </div>
    </TableMobileStyle>
  );
};

export default TableMobile;
