import { FaChartPie, FaWalking } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { MdEventAvailable } from 'react-icons/md'
import { RiContactsLine } from 'react-icons/ri'

const sidebarData = [
  {
    title: 'Customer Data Hub',
    links: [
      {
        name: 'Profiles Management',
        to: 'profiles',
        icon: <ImProfile />,
      },
      {
        name: 'Segments Management',
        to: 'segments',
        icon: <FaChartPie />,
      },
    ],
  },
  {
    title: 'Unified Analytics Hub',
    links: [
      {
        name: 'Customer Data Report',
        to: 'cdr',
        icon: <RiContactsLine />,
      },
      {
        name: 'Event Data Report',
        to: 'edr',
        icon: <MdEventAvailable />,
      },
      {
        name: 'CX Data Report',
        to: 'cxdr',
        icon: <FaWalking />,
      },
    ],
  },
]

export { sidebarData }
