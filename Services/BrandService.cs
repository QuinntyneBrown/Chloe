using System.Data.Entity;
using System.Collections.Generic;
using Dtos;
using Services.Contracts;
using Data.Contracts;
using System.Linq;
using Models;
using System;

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
            var brand = new Brand();

            if (dto.Id != 0)
            {
                brand = uow.Brands.GetAll().Where(x => x.Id == dto.Id)
                    .Include(x => x.Providers)
                    .Include(x=>x.Pages)                    
                    .Single();
                brand.Name = dto.Name;
                brand.Providers = new List<Provider>();
                brand.Pages = new List<Page>();
            } else
            {
                brand = new Brand() { Name = dto.Name };
                this.uow.Brands.Add(brand);
            }
                
            foreach(var provider in dto.Providers)
            {
                if(provider.Checked == true)
                {
                    brand.Providers.Add(uow.Providers.GetById(provider.Id));
                }
            }

            foreach (var page in dto.Pages)
            {
                if (page.Checked == true)
                {
                    brand.Pages.Add(uow.Pages.GetById(page.Id));
                }
            }
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
            var entity = uow.Brands.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return true;
        }

        public ICollection<BrandDto> GetAllIncludingChildren()
        {
            var dtos = new List<BrandDto>();            
            var brands = this.uow.Brands
            .GetAll()
            .Include(x => x.Providers)
            .Include("Providers.Bundles")
            .Where(x => x.IsDeleted == false)
            .ToList();
            foreach(var brand in brands)
            {
                brand.Providers = brand.Providers.Where(x => x.IsDeleted == false).ToList();                
                foreach(var provider in brand.Providers)
                {
                    provider.Bundles = provider.Bundles.Where(x => x.IsDeleted == false).ToList();
                }
                dtos.Add(new BrandDto(brand));
            }
            return dtos;
        }

        public ICollection<ProviderDto> GetProvidersByBrandId(int id)
        {
            return this.uow.Brands
                .GetAll()
                .Where(x => x.Id == id)
                .Include(x=>x.Providers)
                .Single()
                .Providers
                .Where(x=>x.IsDeleted ==false)
                .Select(x => new ProviderDto(x)).ToList();
        }

        public ICollection<PageDto> GetPagesByBrandId(int id)
        {
            var result = this.uow.Brands
                .GetAll()
                .Where(x => x.Id == id)
                .Include(x => x.Pages)
                .Single()
                .Pages
                .Where(x => x.IsDeleted == false)
                .Select(x => new PageDto(x)).ToList();

            return result;
        }

        protected readonly IModernCmsUow uow;
    }
}
