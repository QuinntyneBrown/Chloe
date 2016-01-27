using Data.Contracts;
using Dtos;
using Services.Contracts;
using System;
using System.Linq;
using System.Collections.Generic;
using Models;

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
            var entity = new Page() { Name = dto.Name };
            this.uow.Pages.Add(entity);
            this.uow.SaveChanges();
            return new PageDto(entity);
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
            var entity = uow.Pages.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return true;
        }
        
        protected readonly IModernCmsUow uow;
    }
}
