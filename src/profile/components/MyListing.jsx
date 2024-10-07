import { db } from '../../../configs'
import { Button } from '../../components/ui/button'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CarImages, CarListing } from '../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'
import Service from '../../Shared/Service'
import CarItem from '../../components/CarItem'
import { FaTrashAlt } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog"

function MyListing() {

    const {user} = useUser()
    const [carList, setCarList] = useState([])

    useEffect(() => {
      user&&getUserCarListing()
    }, [user])

    const getUserCarListing = async() => {
      const result = await db.select().from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id))
      const resp = Service.FormatResult(result)
      setCarList(resp)
    }

    const deleteListing = async(id) =>{
      const result = await db.delete(CarListing)
      .where(eq(CarListing.id, id)).returning({deletedId: CarListing.id})

      const currentCarList = carList.filter(item => item.id != id);
      setCarList(currentCarList);
      console.log(result);
    }
  return (
    <div className='mt-6'>
        <div className='flex justify-between items-center'>
                <h2 className='font-bold text-4xl'>My Listing</h2>
                <Link to={'/add-listing'}>
                    <Button>+ Add New Listing</Button>
                </Link>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5'>
          {carList.map((item, index) => (
            <div key={index}>
              <CarItem car={item}/>
              <div className='p-2 bg-gray-50 rounded-lg flex justify-between gap-3'>
                <Link to={'/add-listing?mode=edit&id=' + item?.id} className='w-full'>
                  <Button variant="outline" className="w-full">Edit</Button>
                </Link>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive"><FaTrashAlt/></Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure you want to delete this car?</AlertDialogTitle>
                      <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your car and remove its data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction 
                      className="bg-destructive hover:bg-destructive/90"
                      onClick={() => deleteListing(item?.id)}
                      >Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MyListing