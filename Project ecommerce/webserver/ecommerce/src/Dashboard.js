import { useEffect, useState } from "react";
function Dashboard(){
var a=[
{id:"1",Productnmae:"s1",Rate:"30",Tax:"2"},
{id:"2",Productnmae:"s2",Rate:"60",Tax:"10"},
{id:"2",Productnmae:"s2",Rate:"60",Tax:"10"},
];
const {productlist,setproductlist}=useState([
    {id:"1",Productnmae:"s1",Rate:"30",Tax:"2"},
{id:"2",Productnmae:"s2",Rate:"60",Tax:"10"},
{id:"2",Productnmae:"s2",Rate:"60",Tax:"10"},
]);
useEffect();
return (
    <div className="maindiv">
      <div className="headerpart"> 
        <label>User</label>
      </div>
      <div className="bodypart">
        <div className="menu">
          <nav>
            <li>Home</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Logout</li>
          </nav>
        </div>
        <div className="content">
          <h1>Products</h1>
          {
              productlist.map((item,index)=>{
                  return <p>{index}{item.txtprdName}</p>
              })
          }
          <table>
            <thead>
              <th>Id</th>
              <th>ProductName</th>
              <th>Rate</th>
              <th>Tax</th>
            </thead>
            <tbody>
              {
                  productlist.map((prdct,pos)=>{
                      return <tr>  <td>{prdct.Id}</td>  <td>{prdct.txtprdName}</td>  <td>{prdct.Rate}</td>  <td>{prdct.Tax}</td></tr>
                  })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;