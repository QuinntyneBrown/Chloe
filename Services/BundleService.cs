using Data.Contracts;
using Dtos;
using Services.Contracts;
using System.Linq;
using System;
using System.Collections.Generic;
using Models;

namespace Services
{
    public class BundleService: IBundleService
    {

        public BundleService(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        public BundleDto Add(BundleDto dto)
        {
            var entity = new Bundle();
            if(dto.Id ==0) {
                this.uow.Bundles.Add(entity);
            } else {
                entity = uow.Bundles.GetById(dto.Id);
            }
            entity.Name = dto.Name;            
            this.uow.SaveChanges();
            return new BundleDto(entity);
        }

        public ICollection<BundleDto> Get()
        {
            return this.uow.Bundles
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList()
                .Select(x => new BundleDto(x)).ToList();
        }

        public bool Remove(int id)
        {
            var entity = uow.Bundles.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return true;
        }

        protected readonly IModernCmsUow uow;
    }
}
