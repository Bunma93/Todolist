import { useState } from 'react'
import { FaHome, FaInbox , FaCalendar , FaCalendarAlt, FaChevronDown } from 'react-icons/fa'

export function Sidebar({onSelectedTab}) {
  const [activeIndex,setActiveIndex] = useState(2)

  const handleSelectTab = (index) => {
      setActiveIndex(index);
      onSelectedTab(index);
  }
  const genericLists = [
    {title: "Inbox" , icon : <FaInbox />},
    {title: "Today" , icon : <FaCalendar />},
    {title: "Next 7 days" , icon : <FaCalendarAlt />},
  ]
    return (
        <aside className='sidebar'>
          <section className='sidebar_generic'>
            <ul className='generic_lists'>
              {genericLists.map((listObj,index) => (
                <li
                key={listObj.title}
                className={activeIndex === index ? 'active' : ''}
                onClick={()=> handleSelectTab(index)}
                >
                  <span>{listObj.icon}</span>
                  <h6>{listObj.title}</h6>
                </li>
              ))}
              {/* <li className={`${activeIndex === 0 ? 'active': ""} `}
                  onClick={()=> setActiveIndex(0)}
              >
                  <span>
                    <FaInbox />
                  </span>
                  <h6>Inbox</h6>
              </li>
              <li className={`${activeIndex === 1 ? 'active': ""} `}
                onClick={()=> setActiveIndex(1)}
              >
                  <span>
                    <FaCalendar />
                  </span>
                  <h6>Today</h6>
              </li>
              <li className={`${activeIndex === 2 ? 'active': ""} `}
              onClick={()=> setActiveIndex(2)}
              >
                  <span>
                    <FaCalendarAlt />
                  </span>
                  <h6>Next 7 days</h6>
              </li> */}
            </ul>
          </section>
          <section className='sidebar_middle'>
            <span>
              <FaChevronDown/>
            </span>
            <h6>Projects</h6>
          </section>
          <section className='sidebar_projects'>
            <ul className='project_lists'>
              <li className='active'>
                    <span>
                      <FaInbox />
                    </span>
                    <h6>Project-A</h6>
                </li>
                <li>
                    <span>
                      <FaCalendar />
                    </span>
                    <h6>Project-B</h6>
                </li>
            </ul>
          </section>
        </aside>
    );
}