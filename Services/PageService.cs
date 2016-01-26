using Data.Contracts;
using Dtos;
using Services.Contracts;
using System;
using System.Linq;
using System.Collections.Generic;

namespace Services
{
    public class PageService: IPageService
    {
        public PageService(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        public PageDto Add(PageDto dto)
        {
            throw new NotImplementedException();
        }

        public ICollection<PageDto> Get()
        {
            return this.uow.Pages
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList()
                .Select(x => new PageDto(x)).ToList();
        }

        public bool Remove(int id)
        {
            throw new NotImplementedException();
        }
        
        protected readonly IModernCmsUow uow;
    }
}
