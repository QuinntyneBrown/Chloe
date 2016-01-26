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
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }

        protected readonly IModernCmsUow uow;
    }
}
