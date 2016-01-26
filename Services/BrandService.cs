using System;
using System.Collections.Generic;
using Dtos;
using Services.Contracts;
using Data.Contracts;
using System.Linq;
using Models;

namespace Services
{
    public class BrandService : IBrandService
    {
        public BrandService(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        public BrandDto Add(BrandDto dto)
        {
            var brand = new Brand() { Name = dto.Name };
            this.uow.Brands.Add(brand);
            this.uow.SaveChanges();
            return new BrandDto(brand);
        }

        public ICollection<BrandDto> Get()
        {
            return this.uow.Brands
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList()
                .Select(x => new BrandDto(x)).ToList();
        }

        public bool Remove(int id)
        {
            throw new NotImplementedException();
        }

        protected readonly IModernCmsUow uow;
    }
}
