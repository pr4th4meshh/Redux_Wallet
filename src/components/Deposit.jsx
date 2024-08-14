import "../App.css"
import { useDispatch, useSelector } from "react-redux"
import { add, reset } from "../WalletSlice"
import { Link } from "react-router-dom"
import image from "../../public/image.png"

function Deposit() {
  const dispatch = useDispatch()

  const { amount } = useSelector((state) => state.wallet)

  const add100 = () => {
    dispatch(add())
  }
  // const minus100 = () => {
  //   dispatch(minus())
  // }
  const resetWallet = () => {
    dispatch(reset())
  }
  return (
    <>
      <div className="bg-[#291711] h-screen w-full flex justify-center items-center ">
        <div className="bg-[#8DDCA4] h-[500px] w-[400px] relative place-self-center border-[1px] rounded-lg p-3 ">
          <h1 className="text-[32px] flex justify-center mb-2 ">
            Wallet Balance: ₹{amount}
          </h1>
          <div className="flex flex-row justify-center mb-2 ">
            <button
              onClick={add100}
              className="mr-2 bg-[#63326E] text-white py-1 px-2 rounded-md flex-1 "
            >
              Deposit 100
            </button>
            {/* {amount == 0 ? (
              <button
                disabled
                onClick={minus100}
                className="bg-red-600 text-white py-1 px-2 rounded-md flex-1"
              >
                Nothing to Withdraw
              </button>
            ) : (
              <button
                onClick={minus100}
                className="bg-[#63326E] text-white py-1 px-2 rounded-md flex-1"
              >
                Withdraw 100
              </button>
            )} */}
                        <button
              onClick={add100}
              className="mr-2 bg-green-900 text-white py-1 px-2 rounded-md flex-1 "
            >
              Click to Deposit
            </button>
            <Link to='withdraw' >
            <button>Withdraw Link</button>
            </Link>
          </div>
          <button
            onClick={resetWallet}
            className="bg-[#291711] text-white py-1 px-2 rounded-md w-full "
          >
            Reset
          </button>
        <img src={image} />
              inject register
        </div>
      </div>
    </>
  )
}

export default Deposit