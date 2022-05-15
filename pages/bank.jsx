/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {bindActionCreators as actions} from "../store/index"
const bank = (props) => {
    const dispatch = useDispatch();
    const {depositMoney, withDrawMoney} = bindActionCreators(actions, dispatch)

    const [money, setMoney] = useState(0);

  return (
      <>
        <div className="row">
            <div className="col-md-12 mt-5 pt-5">
                <h2 className='text-center'>Bank</h2>
            </div>
        </div>
        <div className="row align-items-baseline">
            <div className="col-4 text-end">
                <button className="btn btn-primary" onClick={()=> depositMoney(money)}>
                    Deposit
                </button>
            </div>
            <div className="col-4">
                <input type="text" name="money" className="form-control" onChange={(e)=> setMoney(e.target.value)} />
            </div>
            <div className="col-4">
                <button className="btn btn-primary" onClick={()=> withDrawMoney(money)}>
                    Withdraw
                </button>
            </div>
        </div>
      </>
  )
}

export default bank