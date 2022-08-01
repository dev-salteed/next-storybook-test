import Link from '@mui/material/Link';
import LayoutBasic from '@Components/layouts/LayoutBasic';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import { SKButton as Btn } from '@Components/atoms/button/SKButton';
//import SKButton from '../src/components/atoms/button/SKButton';

export default function Home() {
  return (
    <>
      <LayoutBasic>
        <h1>내용이 들어가는 영역입니다</h1>
        <Link href="#none" color="secondary">
          Go to the about page
        </Link>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className="text-teal-600" />
        <a className="text-5xl text-red-500 underline">TailwindCss!</a>
        <h2>버튼 컴퍼넌트</h2>
        <h3>타입(variant)</h3>
        <Button variant="text" className="btn">
          Text
        </Button>
        <Button variant="contained" className="btn">
          Contained
        </Button>
        <Button variant="outlined" className="btn">
          Outlined
        </Button>
        <h3>사이즈(size)</h3>
        <Button size="small" className="btn">
          Small
        </Button>
        <Button size="medium" className="btn">
          Medium
        </Button>
        <Button size="large" className="btn">
          Large
        </Button>
        <Button variant="outlined" size="small" className="btn">
          Small
        </Button>
        <Button variant="outlined" size="medium" className="btn">
          Medium
        </Button>
        <Button variant="outlined" size="large" className="btn">
          Large
        </Button>
        <Button variant="contained" size="small" className="btn">
          Small
        </Button>
        <Button variant="contained" size="medium" className="btn">
          Medium
        </Button>
        <Button variant="contained" size="large" className="btn">
          Large
        </Button>
        <h3>컬러(size)</h3>
        <Button className="btn">Secondary</Button>
        <Button //color="success"
          className="btn bg-primary"
        >
          Normal
        </Button>
        <Button color="secondary" className="btn">
          Secondary
        </Button>
        <Btn color="secondary" variant="contained" size="large">
          aa
        </Btn>
      </LayoutBasic>
    </>
  );
}
