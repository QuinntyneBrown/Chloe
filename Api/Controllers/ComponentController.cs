﻿using Dtos;
using Services.Contracts;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/component")]
    public class ComponentController : ApiController
    {
        public ComponentController(IBrandService service) { this.service = service; }

        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get()
            => Ok(this.service.Get());

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(BrandDto dto)
            => Ok(this.service.Add(dto));


        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id)
        => Ok(service.Remove(id));

        protected readonly IBrandService service;
    }
}
