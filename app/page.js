"use client"

import Link from "next/link";

import Image from 'next/image';
import logo from '@/images/logo.png';

import { useRouter } from "next/navigation";
import { Button } from "reactstrap";

function Page() {
  const router = useRouter();
  return (
    <main>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
            <Image
              priority
              src={logo}
              width={32}
              height={32}
            />
            <span className="fs-4">NextBootJS</span>
          </a>
        </header>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Build your NextJS app faster </h1>
            <p className="col-md-8 fs-4 fw-light">Now you can build your NextJS and Bootstrap skeleton app faster with NextBootJS.</p>
            <Button
              color="dark"
              size="lg"
              onClick={() => {
                router.push('/demo/inbox')
              }}
            >Live Preview</Button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Github</h2>
              <p>This project is made in order to streamline the tools we need to build a web application. How to build it? Check the git repository.</p>
              <Link href={'https://github.com/eduupacheco/nextbootjs'}>
                <button className="btn btn-outline-light" type="button">Repository</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Reactstrap</h2>
              <p>To make possible this template we are using NextJS and Bootstrap based on Reactstrap. If you want to know more about the components you can visit the oficial page of Reactstrap.</p>
              <Link href={'https://reactstrap.github.io/?path=/story/home-installation--page'}>
                <button className="btn btn-outline-secondary" type="button">Components</button>
              </Link>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-body-secondary border-top">
          © 2024
        </footer>
      </div>
    </main>
  )
}

export default Page