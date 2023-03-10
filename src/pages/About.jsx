import React from 'react'
import Profile from '../components/Profile'
function About() {
  return (
    <div>
      <Profile />
      <div className="py-5 text-center">
      <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t justify-center">
      <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Hervey Geralph C. Mapano.
                 All rights reserved.
            </p>
        </div>
        </div>
    </div>
  )
}

export default About
