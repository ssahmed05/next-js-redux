import React from 'react'

const bank = () => {
  return (
      <>
        <div className="row">
            <div className="col-md-12 mt-5 pt-5">
                <h2 className='text-center'>Bank</h2>
            </div>
        </div>
        <div className="row align-items-baseline">
            <div className="col-4 text-end">
                <button className="btn btn-primary">
                    Deposit
                </button>
            </div>
            <div className="col-4">
                <input type="text" name="money" className="form-control" />
            </div>
            <div className="col-4">
                <button className="btn btn-primary">
                    Withdraw
                </button>
            </div>
        </div>
      </>
  )
}

export default bank