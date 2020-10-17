import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import theme from '../../theme';
import Grid from '../../components/Grid/index';
import Text from '../../components/Text/index';

import UndoIcon from '../Undo';
import SearchIcon from '../../icons/Search';
import PersonOutlineIcon from '../../icons/PersonOutline';
import PersonFilledIcon from '../../icons/PersonFilled';
import MessageIcon from '../../icons/Message';
import NewMessage from '../NewMessage';
import MenuIcon from '../../icons/Menu';
import More from '../../icons/More';
import LogoutIcon from '../../icons/Logout';
import LogoIcon from '../../icons/Logo';
import LoggedInUserIcon from '../../icons/LoggedInUser';
import HomeIcon from '../../icons/Home';
import CloseSmallIcon from '../../icons/CloseSmall';
import ChevronUpIcon from '../../icons/ChevronUp';
import ChevronRightIcon from '../../icons/ChevronRight';
import ChevronLeftIcon from '../../icons/ChevronLeft';
import ChevronDownIcon from '../../icons/ChevronDown';
import BenefitIcon from '../../icons/Benefit';
import ArrowLeftIcon from '../../icons/ArrowLeft';
import LockSmall from '../../icons/LockSmall';
import Document from '../../icons/Document';
import Announcement from '../../icons/Announcement';
import Broadband from '../../icons/Broadband';
import Car from '../../icons/Car';
import Cards from '../../icons/Cards';
import Cards2 from '../../icons/Cards2';
import Snowflake from '../../icons/Snowflake';
import ColdStorage from '../../icons/ColdStorage';
import Door from '../../icons/Door';
import DryingRoom from '../../icons/DryingRoom';
import Furniture from '../../icons/Furniture';
import GroundPlan from '../../icons/GroundPlan';
import Key from '../../icons/Key';
import NewKey from '../NewKey';
import Maintenance from '../../icons/Maintenance';
import Sauna from '../../icons/Sauna';
import Storage from '../../icons/Storage';
import OutdoorStorage from '../../icons/OutdoorStorage';
import TV from '../../icons/TV';
import WashingMachine from '../../icons/WashingMachine';
import HobbyRoom from '../../icons/HobbyRoom';
import HouseGear from '../../icons/HouseGear';
import NewMessageDot from '../../icons/NewMessageDot';
import AdditionalInfo from '../../icons/AdditionalInfo';
import LargeSearch from '../../icons/LargeSearch';
import Email from '../Email';
import Phone from '../Phone';
import Facebook from '../Facebook';
import Twitter from '../Twitter';
import LinkedIn from '../LinkedIn';
import Instagram from '../Instagram';
import ArrowRight from '../ArrowRight';
import HomeSearch from '../HomeSearch';
import Edit from '../Edit';
import Remove from '../Remove';
import HeartFilled from '../HeartFilled';
import Check from '../Check';
import LockBig from '../LockBig';
import SatoPulssi from '../SatoPulssi';
import Information from '../Information';
import Pet from '../Pet';
import AddPerson from '../AddPerson';
import DocumentAdd from '../DocumentAdd';
import ApartmentAccess from '../ApartmentAccess';
import ApartmentAgreement from '../ApartmentAgreement';
import Certificate from '../Certificate';
import CalendarConfirmed from '../CalendarConfirmed';
import Calendar from '../Calendar';
import Court from '../Court';
import Download from '../Download';
import Elevator from '../Elevator';
import Feedback from '../Feedback';
import Globe from '../Globe';
import Language from '../Language';
import Like from '../Like';
import Location from '../Location';
import LockedContract from '../LockedContract';
import LockedPayments from '../LockedPayments';
import LockedCards from '../LockedCards';
import Payments from '../Payments';
import Payments2 from '../Payments2';
import PaymentQuestion from '../PaymentQuestion';
import PersonQuestion from '../PersonQuestion';
import PhoneDialog from '../PhoneDialog';
import PhoneDialog2 from '../PhoneDialog2';
import Plus from '../Plus';
import Question from '../Question';
import Settings from '../Settings';
import DocumentSuccess from '../DocumentSuccess';
import Suitcase from '../Suitcase';
import DocumentTerminate from '../DocumentTerminate';
import Visibility from '../Visibility';
import Warning from '../Warning';
import Water from '../Water';
import Write from '../Write';
import Senior from '../Senior';
import Studio from '../Studio';
import HeartOutlined from '../HeartOutlined';
import WhatsApp from '../WhatsApp';
import RemoveLarge from '../RemoveLarge';
import PersonOutlineLarge from '../PersonOutlineLarge';
import Send from '../Send';
import Add from '../Add';
import CheckWithCircle from '../CheckWithCircle';
import CheckBig from '../CheckBig';
import Shelter from '../Shelter';
import Pool from '../Pool';
import Persons from '../Persons';
import NoSmoking from '../NoSmoking';
import Mangle from '../Mangle';
import Balcony from '../Balcony';
import BalconyGlazing from '../BalconyGlazing';
import BabyCarriageStorage from '../BabyCarriageStorage';
import QuestionSmall from '../QuestionSmall';
import CheckboxChecked from '../CheckboxChecked';
import CheckboxUnchecked from '../CheckboxUnchecked';
import RadioButtonChecked from '../RadioButtonChecked';
import RadioButtonUnchecked from '../RadioButtonUnChecked';
import DocumentSmall from '../DocumentSmall';
import InformationBig from '../InformationBig';
import WarningBig from '../WarningBig';
import CalendarSmall from '../CalendarSmall';
import ClockSmall from '../ClockSmall';
import AraApartment from '../AraApartment';

const renderIcons = () => {
  return (
    <Grid container spacing={5}>
      <Grid item>
        <Studio />
        <Text variant="body1">Studio</Text>
      </Grid>
      <Grid item>
        <Senior />
        <Text variant="body1">Senior</Text>
      </Grid>
      <Grid item>
        <Write />
        <Text variant="body1">Write</Text>
      </Grid>
      <Grid item>
        <Water />
        <Text variant="body1">Water</Text>
      </Grid>
      <Grid item>
        <Visibility />
        <Text variant="body1">Visibility</Text>
      </Grid>
      <Grid item>
        <Suitcase />
        <Text variant="body1">Suitcase</Text>
      </Grid>
      <Grid item>
        <Settings />
        <Text variant="body1">Settings</Text>
      </Grid>
      <Grid item>
        <Location />
        <Text variant="body1">Location</Text>
      </Grid>
      <Grid item>
        <Like />
        <Text variant="body1">Like</Text>
      </Grid>
      <Grid item>
        <Language />
        <Text variant="body1">Language</Text>
      </Grid>
      <Grid item>
        <Globe />
        <Text variant="body1">Globe</Text>
      </Grid>
      <Grid item>
        <Elevator />
        <Text variant="body1">Elevator</Text>
      </Grid>
      <Grid item>
        <Download />
        <Text variant="body1">Download</Text>
      </Grid>
      <Grid item>
        <Court />
        <Text variant="body1">Court</Text>
      </Grid>
      <Grid item>
        <Calendar />
        <Text variant="body1">Calendar</Text>
      </Grid>
      <Grid item>
        <CalendarSmall />
        <Text variant="body1">CalendarSmall</Text>
      </Grid>
      <Grid item>
        <ClockSmall />
        <Text variant="body1">ClockSmall</Text>
      </Grid>
      <Grid item>
        <CalendarConfirmed />
        <Text variant="body1">CalendarConfirmed</Text>
      </Grid>
      <Grid item>
        <Certificate />
        <Text variant="body1">Certificate</Text>
      </Grid>
      <Grid item>
        <ApartmentAgreement />
        <Text variant="body1">ApartmentAgreement</Text>
      </Grid>
      <Grid item>
        <ApartmentAccess />
        <Text variant="body1">ApartmentAccess</Text>
      </Grid>

      <Grid item>
        <Pet />
        <Text variant="body1">Pet</Text>
      </Grid>
      <Grid item>
        <UndoIcon />
        <Text variant="body1">Undo</Text>
      </Grid>
      <Grid item>
        <SearchIcon />
        <Text variant="body1">Search</Text>
      </Grid>
      <Grid item>
        <PersonOutlineIcon />
        <Text variant="body1">PersonOutline</Text>
      </Grid>
      <Grid item>
        <PersonOutlineLarge />
        <Text variant="body1">PersonOutlineLarge</Text>
      </Grid>
      <Grid item>
        <PersonFilledIcon />
        <Text variant="body1">PersonFilled</Text>
      </Grid>
      <Grid item>
        <AddPerson />
        <Text variant="body1">AddPerson</Text>
      </Grid>
      <Grid item>
        <PersonQuestion />
        <Text variant="body1">PersonQuestion</Text>
      </Grid>
      <Grid item>
        <Feedback />
        <Text variant="body1">Feedback</Text>
      </Grid>
      <Grid item>
        <MessageIcon />
        <Text variant="body1">Message</Text>
      </Grid>
      <Grid item>
        <MessageIcon numOfNewMessages={2} />
        <Text variant="body1">Message</Text>
      </Grid>
      <Grid item>
        <NewMessage />
        <Text variant="body1">NewMessage</Text>
      </Grid>
      <Grid item>
        <MenuIcon />
        <Text variant="body1">Menu</Text>
      </Grid>
      <Grid item>
        <More />
        <Text variant="body1">More</Text>
      </Grid>
      <Grid item>
        <LogoutIcon />
        <Text variant="body1">Logout</Text>
      </Grid>
      <Grid item>
        <LogoIcon />
        <Text variant="body1">Logo</Text>
      </Grid>
      <Grid item>
        <LoggedInUserIcon>JD</LoggedInUserIcon>
        <Text variant="body1">LoggedInUser</Text>
      </Grid>
      <Grid item>
        <HomeIcon />
        <Text variant="body1">Home</Text>
      </Grid>
      <Grid item>
        <CloseSmallIcon />
        <Text variant="body1">CloseSmall</Text>
      </Grid>
      <Grid item>
        <ChevronUpIcon />
        <Text variant="body1">ChevronUp</Text>
      </Grid>
      <Grid item>
        <ChevronDownIcon />
        <Text variant="body1">ChevronDown</Text>
      </Grid>
      <Grid item>
        <ChevronLeftIcon />
        <Text variant="body1">ChevronLeft</Text>
      </Grid>
      <Grid item>
        <ChevronRightIcon />
        <Text variant="body1">ChevronRight</Text>
      </Grid>
      <Grid item>
        <BenefitIcon />
        <Text variant="body1">Benefit</Text>
      </Grid>
      <Grid item>
        <ArrowLeftIcon />
        <Text variant="body1">ArrowLeft</Text>
      </Grid>
      <Grid item>
        <ArrowRight />
        <Text variant="body1">ArrowRight</Text>
      </Grid>
      <Grid item>
        <LockSmall />
        <Text variant="body1">LockSmall</Text>
      </Grid>
      <Grid item>
        <Document />
        <Text variant="body1">Document</Text>
      </Grid>
      <Grid item>
        <DocumentSmall />
        <Text variant="body1">DocumentSmall</Text>
      </Grid>
      <Grid item>
        <DocumentAdd />
        <Text variant="body1">DocumentAdd</Text>
      </Grid>
      <Grid item>
        <DocumentSuccess />
        <Text variant="body1">DocumentSuccess</Text>
      </Grid>
      <Grid item>
        <DocumentTerminate />
        <Text variant="body1">DocumentTerminate</Text>
      </Grid>
      <Grid item>
        <Announcement />
        <Text variant="body1">Announcement</Text>
      </Grid>
      <Grid item>
        <Broadband />
        <Text variant="body1">Broadband</Text>
      </Grid>
      <Grid item>
        <Car />
        <Text variant="body1">Car</Text>
      </Grid>
      <Grid item>
        <Payments />
        <Text variant="body1">Payments</Text>
      </Grid>
      <Grid item>
        <Payments2 />
        <Text variant="body1">Payments2</Text>
      </Grid>
      <Grid item>
        <Cards />
        <Text variant="body1">Cards</Text>
      </Grid>
      <Grid item>
        <Cards2 />
        <Text variant="body1">Cards2</Text>
      </Grid>
      <Grid item>
        <LockedCards />
        <Text variant="body1">LockedCards</Text>
      </Grid>
      <Grid item>
        <LockedPayments />
        <Text variant="body1">LockedPayments</Text>
      </Grid>
      <Grid item>
        <LockedContract />
        <Text variant="body1">LockedContract</Text>
      </Grid>
      <Grid item>
        <Snowflake />
        <Text variant="body1">Snowflake</Text>
      </Grid>
      <Grid item>
        <Door />
        <Text variant="body1">Door</Text>
      </Grid>
      <Grid item>
        <DryingRoom />
        <Text variant="body1">DryingRoom</Text>
      </Grid>
      <Grid item>
        <Furniture />
        <Text variant="body1">Furniture</Text>
      </Grid>
      <Grid item>
        <GroundPlan />
        <Text variant="body1">GroundPlan</Text>
      </Grid>
      <Grid item>
        <Key />
        <Text variant="body1">Key</Text>
      </Grid>
      <Grid item>
        <NewKey />
        <Text variant="body1">NewKey</Text>
      </Grid>
      <Grid item>
        <Maintenance />
        <Text variant="body1">Maintenance</Text>
      </Grid>
      <Grid item>
        <Sauna />
        <Text variant="body1">Sauna</Text>
      </Grid>
      <Grid item>
        <ColdStorage />
        <Text variant="body1">ColdStorage</Text>
      </Grid>
      <Grid item>
        <Storage />
        <Text variant="body1">Storage</Text>
      </Grid>
      <Grid item>
        <OutdoorStorage />
        <Text variant="body1">OutdoorStorage</Text>
      </Grid>
      <Grid item>
        <TV />
        <Text variant="body1">TV</Text>
      </Grid>
      <Grid item>
        <WashingMachine />
        <Text variant="body1">WashingMachine</Text>
      </Grid>
      <Grid item>
        <HobbyRoom />
        <Text variant="body1">HobbyRoom</Text>
      </Grid>
      <Grid item>
        <HouseGear />
        <Text variant="body1">HouseGear</Text>
      </Grid>
      <Grid item>
        <div style={{ position: 'relative', height: '30px' }}>
          <NewMessageDot>2</NewMessageDot>
        </div>
        <Text variant="body1">NewMessageDot</Text>
      </Grid>
      <Grid item>
        <AdditionalInfo />
        <Text variant="body1">AdditionalInfo</Text>
      </Grid>
      <Grid item>
        <LargeSearch />
        <Text variant="body1">LargeSearch</Text>
      </Grid>
      <Grid item>
        <Email />
        <Text variant="body1">Email</Text>
      </Grid>
      <Grid item>
        <PaymentQuestion />
        <Text variant="body1">PaymentQuestion</Text>
      </Grid>
      <Grid item>
        <Phone />
        <Text variant="body1">Phone</Text>
      </Grid>
      <Grid item>
        <PhoneDialog />
        <Text variant="body1">PhoneDialog</Text>
      </Grid>
      <Grid item>
        <PhoneDialog2 />
        <Text variant="body1">PhoneDialog2</Text>
      </Grid>
      <Grid item>
        <Facebook />
        <Text variant="body1">Facebook</Text>
      </Grid>
      <Grid item>
        <Twitter />
        <Text variant="body1">Twitter</Text>
      </Grid>
      <Grid item>
        <LinkedIn />
        <Text variant="body1">LinkedIn</Text>
      </Grid>
      <Grid item>
        <Instagram />
        <Text variant="body1">Instagram</Text>
      </Grid>
      <Grid item>
        <WhatsApp />
        <Text variant="body1">WhatsApp</Text>
      </Grid>
      <Grid item>
        <HomeSearch />
        <Text variant="body1">HomeSearch</Text>
      </Grid>
      <Grid item>
        <Edit />
        <Text variant="body1">Edit</Text>
      </Grid>
      <Grid item>
        <Remove />
        <Text variant="body1">Remove</Text>
      </Grid>
      <Grid item>
        <RemoveLarge />
        <Text variant="body1">RemoveLarge</Text>
      </Grid>
      <Grid item>
        <HeartFilled />
        <Text variant="body1">HeartFilled</Text>
      </Grid>
      <Grid item>
        <HeartOutlined />
        <Text variant="body1">HeartOutlined</Text>
      </Grid>
      <Grid item>
        <Check />
        <Text variant="body1">Check</Text>
      </Grid>
      <Grid item>
        <LockBig />
        <Text variant="body1">LockBig</Text>
      </Grid>
      <Grid item>
        <SatoPulssi />
        <Text variant="body1">SatoPulssi</Text>
      </Grid>
      <Grid item>
        <Information />
        <Text variant="body1">Information</Text>
      </Grid>
      <Grid item>
        <InformationBig />
        <Text variant="body1">InformationBig</Text>
      </Grid>
      <Grid item>
        <Plus />
        <Text variant="body1">Plus</Text>
      </Grid>
      <Grid item>
        <Question />
        <Text variant="body1">Question</Text>
      </Grid>
      <Grid item>
        <QuestionSmall />
        <Text variant="body1">QuestionSmall</Text>
      </Grid>
      <Grid item>
        <Warning />
        <Text variant="body1">Warning</Text>
      </Grid>
      <Grid item>
        <WarningBig />
        <Text variant="body1">WarningBig</Text>
      </Grid>
      <Grid item>
        <Send />
        <Text variant="body1">Send</Text>
      </Grid>
      <Grid item>
        <Add />
        <Text variant="body1">Add</Text>
      </Grid>
      <Grid item>
        <CheckWithCircle />
        <Text variant="body1">CheckWithCircle</Text>
      </Grid>
      <Grid item>
        <CheckBig />
        <Text variant="body1">CheckBig</Text>
      </Grid>
      <Grid item>
        <Shelter />
        <Text variant="body1">Shelter</Text>
      </Grid>
      <Grid item>
        <Pool />
        <Text variant="body1">Pool</Text>
      </Grid>
      <Grid item>
        <Persons />
        <Text variant="body1">Persons</Text>
      </Grid>
      <Grid item>
        <NoSmoking />
        <Text variant="body1">NoSmoking</Text>
      </Grid>
      <Grid item>
        <Mangle />
        <Text variant="body1">Mangle</Text>
      </Grid>
      <Grid item>
        <Balcony />
        <Text variant="body1">Balcony</Text>
      </Grid>
      <Grid item>
        <BalconyGlazing />
        <Text variant="body1">BalconyGlazing</Text>
      </Grid>
      <Grid item>
        <BabyCarriageStorage />
        <Text variant="body1">BabyCarriageStorage</Text>
      </Grid>
      <Grid item>
        <CheckboxChecked />
        <Text variant="body1">CheckboxChecked</Text>
      </Grid>
      <Grid item>
        <CheckboxUnchecked />
        <Text variant="body1">CheckboxUnchecked</Text>
      </Grid>
      <Grid item>
        <RadioButtonChecked />
        <Text variant="body1">RadioButtonChecked</Text>
      </Grid>
      <Grid item>
        <RadioButtonUnchecked />
        <Text variant="body1">RadioButtonUnchecked</Text>
      </Grid>
      <Grid item>
        <AraApartment />
        <Text variant="body1">AraApartment</Text>
      </Grid>
    </Grid>
  );
};

storiesOf('Icons', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('all icons', () => renderIcons());
