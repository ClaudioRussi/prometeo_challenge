import { Carousel } from 'antd';
const contentStyle = {
    height: '30px',
    color: '#fff',
    lineHeight: '30px',
    textAlign: 'center',
    fontSize: '40px',
};

const carouselStyle = {
    height: "300px",
    backgroundColor: "#364d79"
};

const Accounts = (props) => {
    const {accountData} = props;
    return (
        <Carousel style={carouselStyle}>
            {
                accountData.map(account => (
                    <div key={account.id}>
                        <h2 style={{...contentStyle, marginTop: "40px", marginBottom: "50px"}} >{account.name}</h2>
                        <p style={{...contentStyle, fontSize: "35px"}} >Account number: {account.number}</p>
                        <p style={{...contentStyle, fontSize: "35px"}} >Account balance: {account.balance} {account.currency}</p>
                    </div>
                ))
            }
        </Carousel>
    );
};

export default Accounts;