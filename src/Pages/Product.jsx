import { Divider } from "@chakra-ui/react"
import { SideBar } from "./SideBar"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProducts } from "../Redux/Product/action"
import { useDispatch } from "react-redux"
import { LoanCard } from "../Components/LoanCard"
import { useSelector } from "react-redux"
import axios from "axios"
export const Product = () => {

  const user = useSelector((store) => store.authReducer.currentUser.id)
  const data = useSelector((store) =>

    store.productReducer.products)

  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const initialOrder = searchParams.get("order")
  const initialCategory = searchParams.get("category")
  const [category, serCategory] = useState(initialCategory || "homeloan")
  const fetchuser = () => {
    axios.get("https://money-mentor.onrender.com/LoginUsers")
      .then((res) => {

        const userId = res.data.find((el) => el.id == user)
        serCategory(userId.category)
      })
  }
  

  const [order, setOrder] = useState(initialOrder || "")


  let paramsObj = {
    params: {
      category: searchParams.get("category"),
      _sort: searchParams.get("order") && "interest",
      _order: searchParams.get("order")
    }
  }

  useEffect(() => {
    const params = {
      category
    }
    order && (params.order = order)
    setSearchParams(params)
  }, [order, category])

  useEffect(() => {
    fetchuser()
    dispatch(getProducts(paramsObj))
  }, [searchParams, order, category])
  

  const changeinterest = (val) => {
    setOrder(val)
  }


  return (

    <div style={{ backgroundColor: "#E5D1FA", marginTop: "-10px", paddingTop: "10px" }}>
      <SideBar changeinterest={changeinterest} />
      {data.map((el) => (<LoanCard {...el} />))}
    </div>
  )
}













