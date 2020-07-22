import React from 'react'
import './InfoDisplay.css'


//display formatted json data
export default function CreDebDisplay({ data = {} }) {
    debugger;
    if (!data) {
        return null
    }
    return (
                
            <div >
                

                <h3>Saving Products Recommendations based on Transactions History</h3>
                
            <table  border="1" width="100%">
            
            <tr>
                                <td width="50%" align="center">
                            
                <tr><br></br></tr>
                                <tr className="tableBgColor" >
                                    <td width="25%"><b>Month</b></td>
                                    <td width="25%" key="totCre" ><b>Total Credit (GBP)</b></td>
                                    <td width="25%" key="totDeb"><b>Total Debit (GBP)</b></td>
                                    <td width="25%" key="netCre"><b>Net (GBP)</b></td>
                                    
                                </tr>
                                {data != null && data.monthlyTransactionList.MonthlyTransactionDetails ?  
                                    data.monthlyTransactionList.MonthlyTransactionDetails.map((item,index)=> 
                                    {return ( <tr className="rowBgColor" >
                                        <td>{item.Month}</td>
                                        <td>{item.TotalCredit}</td>
                                        <td>{item.TotalDebit}</td>
                                        <td>{item.Net}</td>
                                        </tr>) }) : 1
                                }
                                        <p ><font size="2">* These are based on accounts for which consent is provided</font></p>

                                

                 </td>
                 <td width="50%">
                        
                            <p>Saving is the key to secure Financial Future. 
                                Based on your last 06 months transactions history your net monthly average credit is £ <b>{data.AvgNet}</b>
                                <br></br>
                                <br></br>
                                  {data.AvgNet >= 0 ? 
                                     (<font>Its great! You are saving good amount and this can be grown further by investing in right products.
                                        </font>): 
                                     (<font>You don't have any saving in last 06 months so we encourage you to start saving a small amount 
                                         which can be grown significantly over time with right investments.
                                         </font>)
                                }
                                <br></br>
                                <br></br>
                                <font>Here are some saving products recommendation for you.</font>
                                 </p>
                </td>
            </tr>
            </table>

            {data.AvgNet >= 0 ? 
            (
            <table border="1" width="100%">
             <tr >
                 <p><b>Product Recommendations</b></p>
                                <font>
                                <p><b>Premium Saver</b></p>
                                <p>Better suited for those with balances over £ 25,000</p>
                                <p>£ {data.AvgNet} invested per month for 5 years will grow to £ {61.50*data.AvgNet}</p>  
                                <button className="rowBgColor">Apply Now</button>
                                <p><b>----------------------------------------------------------</b></p>
                                <p><b>Fixed Term Savings Account</b></p>
                                <p>Peace of mind savings on balances starting from £ 500, interest rate is fixed for selected tenure</p>
                                <p>£ 50000 invested for 2 years term will grow to £ 50,401</p>
                                <button className="rowBgColor">Apply Now</button>
                                <p></p>
                                </font>
             </tr>
             </table>
             )  :
            (
             <table border="1" width="100%">
             <tr >
             <p><b>Product Recommendations</b></p>
                                <font>
                                <p><b>Instant Saver</b></p>
                                <p>Start saving with just £ 1 , Instant access to your money when you need it</p>
                                <p>£ 100 invested per month for 5 years will grow to GBP 6200</p>
                                <button className="rowBgColor">Apply Now</button>

                                <p><b>----------------------------------------------------------</b></p>
                                <p><b>Savings Builder</b></p>
                                <p>Great for regular savers, with a balance under £ 10,000</p>
                                <p>Grow your savings by £50 or more each month to earn up to 1.00% AER/Gross p.a. (variable)</p>
                                <p>£ 1000 initial invesetment and £ 50 therafter per month will grow to £ 1,613.32 in 12 months</p>
                                <button className="rowBgColor">Apply Now</button>
                                <p></p>
                                </font>
             </tr>
             </table>
            )    }
        <table border="1" width="100%">
        <tr >
            <p>For additonal details and more Saving Options please 
                    visit <a href = "https://personal.natwest.com/personal/savings.html" target="_blank"> NWB Website </a> </p>
                    </tr>
        </table>
                
            </div>
        
    )
}
