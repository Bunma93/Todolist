import { FaHome, FaInbox , FaCalendar , FaCalendarAlt, FaChevronDown } from 'react-icons/fa'

export function Sidebar() {
    return (
        <aside className='sidebar'>
          <section className='sidebar_generic'>
            <ul className='generic_lists'>
              <li className='active'>
                  <span>
                    <FaInbox />
                  </span>
                  <h6>Inbox</h6>
              </li>
              <li>
                  <span>
                    <FaCalendar />
                  </span>
                  <h6>Today</h6>
              </li>
              <li>
                  <span>
                    <FaCalendarAlt />
                  </span>
                  <h6>Next 7 days</h6>
              </li>
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